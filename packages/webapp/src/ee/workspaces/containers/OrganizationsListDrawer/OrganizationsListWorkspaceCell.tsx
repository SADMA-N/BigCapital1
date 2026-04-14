import React from 'react';
import { Spinner, Tag } from '@blueprintjs/core';
import { x } from '@xstyled/emotion';
import { firstLettersArgs } from '@/utils';

/** Workspace row shape used by the organizations list table (camelCase API). */
export type OrganizationsListWorkspaceRow = {
  organizationId: string;
  metadata?: { name?: string } | null;
  isBuildRunning?: boolean;
};

export type OrganizationsListWorkspaceCellProps = {
  workspace: OrganizationsListWorkspaceRow;
  activeOrganizationId: string | null;
};

export function OrganizationsListWorkspaceCell({
  workspace,
  activeOrganizationId,
}: OrganizationsListWorkspaceCellProps) {
  const name = workspace.metadata?.name || workspace.organizationId;
  const initials = firstLettersArgs(...(name || '').split(' '));
  const isActive = workspace.organizationId === activeOrganizationId;

  return (
    <x.div display="flex" alignItems="center" gap="10px" minWidth={0} w="100%">
      <x.div
        boxSizing="border-box"
        w="28px"
        h="28px"
        minWidth="28px"
        minHeight="28px"
        backgroundColor="#5c7c99"
        borderRadius="10px"
        color="#ffffff"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="12px"
        lineHeight={1}
        letterSpacing="0.02em"
        className={isActive ? 'is-active' : undefined}
      >
        {workspace.isBuildRunning ? (
          <Spinner size={14} />
        ) : (
          <x.span>{initials}</x.span>
        )}
      </x.div>
      <x.div
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="4px"
        minWidth={0}
        flex={1}
      >
        <x.span
          fontWeight={500}
          fontSize="14px"
          color="rgba(255, 255, 255, 0.88)"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          maxW="100%"
        >
          {name}
        </x.span>
      </x.div>
    </x.div>
  );
}
