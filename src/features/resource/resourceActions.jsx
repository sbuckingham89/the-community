import {
  CREATE_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
} from './resourceConstants';

export const createResource = resource => {
  return {
    type: CREATE_RESOURCE,
    payload: {
      resource,
    },
  };
};

export const updateResource = resource => {
  return {
    type: UPDATE_RESOURCE,
    payload: {
      resource,
    },
  };
};

export const deleteResource = resourceID => {
  return {
    type: DELETE_RESOURCE,
    payload: {
      resourceID,
    },
  };
};
