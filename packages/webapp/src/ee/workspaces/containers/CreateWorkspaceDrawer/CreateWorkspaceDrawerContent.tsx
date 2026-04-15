// @ts-nocheck
import React from 'react';
import * as R from 'ramda';
import { DrawerHeaderContent, FormattedMessage as T } from '@/components';
import { withDrawerActions } from '@/containers/Drawer/withDrawerActions';
import { DRAWERS } from '@/constants/drawers';
import { CreateWorkspaceStepper } from './CreateWorkspaceStepper';

/**
 * Create workspace drawer content.
 */
function CreateWorkspaceDrawerContentRoot({ closeDrawer }) {
  const handleClose = () => {
    closeDrawer(DRAWERS.CREATE_WORKSPACE);
  };

  return (
    <>
      <DrawerHeaderContent
        name={DRAWERS.CREATE_WORKSPACE}
        title={<T id={'workspace.create_new_workspace'} />}
      />
      <CreateWorkspaceStepper onClose={handleClose} />
    </>
  );
}

export const CreateWorkspaceDrawerContent = R.compose(withDrawerActions)(
  CreateWorkspaceDrawerContentRoot,
);
