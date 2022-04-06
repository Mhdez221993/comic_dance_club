// import authReducer, { setSingInApi, setSingOutApi, setSingUpApi } from './reducer';

// describe('counter reducer', () => {
//   const initialState = {
//     name: '',
//     email: '',
//     Authorization: null,
//   };

//   it('should handle initial state', () => {
//     expect(authReducer(undefined, { type: 'unknown' })).toEqual({
//       value: 0,
//       status: 'idle',
//     });
//   });

//   it('should handle increment', () => {
//     const actual = authReducer(initialState, setSingUpApi());
//     expect(actual).toEqual({ message: [], state: true });
//   });

//   it('should handle decrement', () => {
//     const actual = authReducer(initialState, setSingInApi());
//     expect(actual).toEqual({ message: 'Sing In Successfully!', status: true });
//   });

//   it('should handle incrementByAmount', () => {
//     const actual = authReducer(initialState, setSingOutApi());
//     expect(actual).toEqual(initialState);
//   });
// });
