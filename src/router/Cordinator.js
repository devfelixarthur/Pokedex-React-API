export function goToHome (navigate){
    navigate("/")
}

export function goToPokedex (navigate){
    navigate("/pokedex");
}

export function goToDetails(navigate, nome) {
    navigate(`/details/${nome}`)
}