import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  userInput: '',
  select: [],
  containerRefer: null,
};

function scrollToRef(containerReferArg) {
  if (containerReferArg) {
    setTimeout(() => {
      const offsetTop = containerReferArg.offsetTop - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  }
}

const attorneysSlice = createSlice({
  name: 'attorneys',
  initialState,
  reducers: {
    clearQuery(state, action) {
      const rQuery = current(state).select.filter(
        (a) => a.key !== action.payload,
      );
      if (action.payload.key === 'query') {
        state.userInput = '';
      }
      state.select = rQuery;
      scrollToRef(state.containerRefer);
    },
    handleChange(state, action) {
      if (
        action.payload.currentTarget
        && action.payload.currentTarget.value.length === 0
      ) {
        state.userInput = '';
      } else {
        const input = action.payload.target.value.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        );
        const results = { selected: state.userInput, key: 'query' };
        const concatResults = state.select.concat(results);
        state.userInput = input;
        state.select = concatResults;
        scrollToRef(state.containerRefer);
      }
    },
    setReference(state, action) {
      state.containerRefer = action.payload.ref;
    },
    onSelect(state, action) {
      const results = {
        selected: action.payload.input,
        key: action.payload.target.name,
      };
      state.select = state.select
        .filter((a) => a.key !== results.key)
        .concat(results);
      scrollToRef();
    },
    onSelectLetter(state, action) {
      const results = {
        selected: action.payload.toUpperCase(),
        key: 'letterInLastName',
      };
      const concatResults = state.select
        .filter((el) => el.key !== 'letterInLastName')
        .concat(results);
      state.select = concatResults;
      scrollToRef();
    },
    clearAll(state) {
      state.userInput = '';
      state.select = [];
      scrollToRef();
    },
  },
  // extraReducers?: (builder) => void,
});

export const {
  clearQuery,
  handleChange,
  setReference,
  onSelect,
  onSelectLetter,
  clearAll,
} = attorneysSlice.actions;
export default attorneysSlice.reducer;
