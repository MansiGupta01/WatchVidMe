const useGenre = (selectedGenre) => {
    if (selectedGenre.length < 1) {
        return "";
    }
    else {
        const genreIds = selectedGenre.map((g) => g.id);
        return genreIds.reduce((acc, curr) => acc + "," + curr); //works same as return genreIds.join(",") to change array into concatenated string
    }
}

export default useGenre
