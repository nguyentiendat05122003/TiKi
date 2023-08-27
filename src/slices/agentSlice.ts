import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

const AgentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        setAgent(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setAgent } = AgentSlice.actions;
const agentReducer = AgentSlice.reducer;
export default agentReducer;
