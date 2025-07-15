// 🏆 SNACK 1
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Post non trovato");
                return res.json();
            })
            .then((post) => resolve(post.title))
            .catch((err) => reject(err.message));
    });
}