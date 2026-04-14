// @ts-nocheck
import React, { useState, useMemo, useCallback } from 'react';
import intl from 'react-intl-universal';
import {
  Button,
  Intent,
  Tooltip,
  Position,
  Icon,
  Popover,
  Menu,
  MenuItem,
} from '@blueprintjs/core';
import { x } from '@xstyled/emotion';
import styled from '@xstyled/emotion';
import { DataTable, TableSkeletonRows } from '@/components';
import { useSetDefaultWorkspace } from '@/hooks/query';
import { useAuthOrganizationId } from '@/hooks/state';
import { useSwitchOrganization } from '@/hooks/useSwitchOrganization';
import { compose } from '@/utils';
import { OrganizationsListWorkspaceCell } from './OrganizationsListWorkspaceCell';
import { WorkspaceSwitchingOverlay } from '@/components';
import { withDialogActions } from '@/containers/Dialog/withDialogActions';
import { DialogsName } from '@/constants/dialogs';

/**
 * Format currency for display
 */
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Organizations list table component.
 */
function OrganizationsListTable({
  workspaces,
  isLoading,
  onClose,
  openDialog,
  showDefaultControls = true,
}) {
  const activeOrganizationId = useAuthOrganizationId();
  const switchOrganization = useSwitchOrganization();
  const setDefaultWorkspace = useSetDefaultWorkspace();
  const [switchingWorkspaceName, setSwitchingWorkspaceName] = useState(null);

  const handleSwitchWorkspace = useCallback(
    (organizationId, workspaceName) => {
      if (organizationId === activeOrganizationId) {
        return;
      }
      setSwitchingWorkspaceName(workspaceName);
      onClose();
      setTimeout(() => {
        switchOrganization(organizationId, workspaceName);
      }, 350);
    },
    [activeOrganizationId, switchOrganization, onClose],
  );

  const handleSetDefault = useCallback(
    (organizationId) => {
      setDefaultWorkspace.mutate({ organizationId });
    },
    [setDefaultWorkspace],
  );

  const handleDeleteWorkspace = useCallback(
    (workspace) => {
      openDialog(DialogsName.WorkspaceDelete, {
        organizationId: workspace.organizationId,
        workspaceName: workspace.metadata?.name || workspace.organizationId,
      });
    },
    [openDialog],
  );

  const handleInactivateWorkspace = useCallback(
    (workspace) => {
      openDialog(DialogsName.WorkspaceInactivate, {
        organizationId: workspace.organizationId,
        workspaceName: workspace.metadata?.name || workspace.organizationId,
        isActive: workspace.isActive,
      });
    },
    [openDialog],
  );

  const columns = useMemo(
    () => [
      {
        Header: intl.get('workspaces.column_workspace', { fallback: 'Workspace' }),
        accessor: 'metadata.name',
        width: 320,
        Cell: ({ row }) => (
          <OrganizationsListWorkspaceCell
            workspace={row.original}
            activeOrganizationId={activeOrganizationId}
          />
        ),
      },
      {
        id: 'assets',
        Header: intl.get('workspaces.column_assets', { fallback: 'Assets' }),
        accessor: 'assets',
        Cell: ({ value }) => formatCurrency(value ?? 1000000),
        align: 'right',
        width: 100,
      },
      {
        id: 'liabilities',
        Header: intl.get('workspaces.column_liabilities', { fallback: 'Liabilities' }),
        accessor: 'liabilities',
        Cell: ({ value }) => formatCurrency(value ?? 1000000),
        align: 'right',
        width: 100,
      },
      {
        Header: '',
        accessor: 'actions',
        width: 120,
        disableSortBy: true,
        Cell: ({ row }) => {
          const workspace = row.original;
          const isDisabled = !workspace.isReady || workspace.isBuildRunning || workspace.isDeleting;
          const isOwner = workspace.role === 'owner';
          const canSwitch = !isDisabled && workspace.isActive;
          const defaultDisabled =
            !workspace.isReady || workspace.isBuildRunning || !workspace.isActive || workspace.isDefault;
          const canSetDefaultInMenu =
            showDefaultControls && !workspace.isDefault && !defaultDisabled;

          const menuContent = isOwner ? (
            <Menu minimal>
              {canSetDefaultInMenu && (
                <MenuItem
                  text={intl.get('workspaces.set_as_default', { fallback: 'Set as default' })}
                  icon={<Icon icon="star" />}
                  onClick={() => handleSetDefault(workspace.organizationId)}
                />
              )}
              <MenuItem
                text={
                  workspace.isActive
                    ? intl.get('workspaces.inactivate_workspace', { fallback: 'Inactivate Workspace' })
                    : intl.get('workspaces.activate_workspace', { fallback: 'Activate Workspace' })
                }
                icon={<Icon icon={workspace.isActive ? 'disable' : 'tick'} />}
                disabled={isDisabled}
                onClick={() => !isDisabled && handleInactivateWorkspace(workspace)}
              />
              <MenuItem
                text={intl.get('workspaces.delete_workspace', { fallback: 'Delete Workspace' })}
                icon={<Icon icon="trash" />}
                disabled={isDisabled}
                intent={Intent.DANGER}
                onClick={() => !isDisabled && handleDeleteWorkspace(workspace)}
              />
            </Menu>
          ) : null;

          return (
            <x.div display="flex" alignItems="center" justifyContent="flex-end" gap="8px">
              {isOwner && (
                <Popover
                  content={menuContent}
                  position={Position.BOTTOM_RIGHT}
                  boundary={'window'}
                >
                  <Button
                    type="button"
                    small
                    disabled={isDisabled}
                    icon={'more'}
                  />
                </Popover>
              )}
              <Tooltip
                content={intl.get('workspaces.switch_to_organization', { fallback: 'Switch' })}
                position={Position.TOP}
              >
                <Button
                  type="button"
                  small
                  disabled={!canSwitch}
                  onClick={() =>
                    handleSwitchWorkspace(workspace.organizationId, workspace.metadata?.name)
                  }
                  icon={<Icon icon="arrow-right" iconSize={18} />}
                />
              </Tooltip>
            </x.div>
          );
        },
      },
    ],
    [
      activeOrganizationId,
      handleSwitchWorkspace,
      handleSetDefault,
      handleDeleteWorkspace,
      handleInactivateWorkspace,
      showDefaultControls,
    ],
  );

  return (
    <>
      <DataTable
        columns={columns}
        data={workspaces}
        loading={isLoading}
        headerLoading={isLoading}
        progressBarLoading={isLoading}
        TableLoadingRenderer={TableSkeletonRows}
        noInitialFetch={true}
        manualPagination={false}
        hidePaginationNoPages={true}
        pagination={false}
        className="organizations-list-table"
      />
      {switchingWorkspaceName && (
        <WorkspaceSwitchingOverlay workspaceName={switchingWorkspaceName} />
      )}
    </>
  );
}

export default compose(withDialogActions)(OrganizationsListTable);
