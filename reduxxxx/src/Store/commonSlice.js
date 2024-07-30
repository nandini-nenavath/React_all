import { createSlice } from "@reduxjs/toolkit"

const initialState = {

}
export const commonSlice = createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        storeData :(state,action)=>{
            state.data = action.payload
        }
    }
})
export const {
    storeData
}= commonSlice.actions;
export default commonSlice.reducer;

