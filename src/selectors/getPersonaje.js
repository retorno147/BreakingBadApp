export const getPersonaje = ( name = '', protagonistas ) => {

    if ( name === '') {
        return [];
    }
    name= name.toLocaleLowerCase();
    return protagonistas.filter( protagonista => (protagonista?.name?.toLocaleLowerCase().includes(name)));
}