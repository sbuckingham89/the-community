import { createReducer } from '../../app/common/util/reducerUtil';
import {
  CREATE_RESOURCE,
  DELETE_RESOURCE,
  UPDATE_RESOURCE,
} from './resourceConstants';

const initialState = [
  {
    id: '1',
    name: 'Crisis Text Line',
    date: '2018-03-27',
    category: 'Crisis Intervention',
    description:
      'Crisis Text Line is free, 24/7 support for those in crisis. Text 741741 from anywhere in the US to text with a trained Crisis Counselor. Crisis Text Line trains volunteers to support people in crisis.',
    city: 'New York, NY',
    location: '25 W 24th New York, New York 10010',
    hostedBy: 'Nancy Lublin',
    resourcePhotoURL:
      'https://static1.squarespace.com/static/5914d841e6f2e109b2a338f6/t/5accf8440e2e72f4e511de7c/1523382340125/Square+logo.jpg',
    endorsers: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Shared Housing Services',
    date: '2018-03-28',
    category: 'Housing',
    description:
      'Shared Housing Services offers low-income individuals and families innovative and affordable solutions to prevent homelessness and foster independence through home sharing and transitional housing programs that include case management services and connections to vital community resources. ',
    city: 'Tacoma, WA',
    location: '901 S 11th St, Tacoma, WA',
    hostedBy: 'Mark Merrill',
    resourcePhotoURL:
      'http://sharedhousingservices.org/images/SHS-Master-Logo.png',
    endorsers: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ],
  },
];

export const createResource = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateResource = (state, payload) => {
  return [
    ...state.filter(resource => resource.id !== payload.resource.id),
    Object.assign({}, payload.resource),
  ];
};

export const deleteResource = (state, payload) => {
  return [...state.filter(resource => resource.id !== payload.resourceID)];
};

export default createReducer(initialState, {
  [CREATE_RESOURCE]: createResource,
  [UPDATE_RESOURCE]: updateResource,
  [DELETE_RESOURCE]: deleteResource,
});
