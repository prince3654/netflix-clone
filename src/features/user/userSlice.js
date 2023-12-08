// working with Redux to remove props drilling

import {createSlice} from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";

// users slice defination
//login and logout slice
/*Here in redux we have creaated two operation to react with the global redux for login and logout.the two action are login and logout having power
to change the condition of the log thats why we have defined user defined log*/
export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user= null;
        }

    },
});

// exporting two action that to be performed
export const {login,logout} = userSlice.actions;
// exporting selectUser functionality
export const selectUser = state => state.user.user;

export default userSlice.reducer;