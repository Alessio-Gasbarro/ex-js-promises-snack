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

getPostTitle(1).then(console.log).catch(console.error);

// 🏆 SNACK 1 - BONUS
function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("Post non trovato");
            return res.json();
        })
        .then((post) => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then((res) => {
                    if (!res.ok) throw new Error("Utente non trovato");
                    return res.json();
                })
                .then((user) => {
                    post.user = user;
                    return post;
                });
        });
}

getPost(1).then(console.log).catch(console.error);

// 🏆 SNACK 2
function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isBloccato = Math.random() < 0.2;
            if (isBloccato) {
                reject("Il dado si è incastrato!");
            } else {
                const numero = Math.floor(Math.random() * 6) + 1;
                resolve(numero);
            }
        }, 3000);
    });
}

lanciaDado().then(console.log).catch(console.error);