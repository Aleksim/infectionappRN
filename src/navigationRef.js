let navigator;

export const setNavigator = (nav) =>{
    navigator = nav
};

export const navigate = (routeName, params)=>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    )
}