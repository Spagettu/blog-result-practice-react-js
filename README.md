облати хранения данных

- бд json-server
- BFF
- redux

сущности приложений

- пользователи: бд, bff, redux store
- роль пользователя: бд, bff, redux store
- статья: бд, redux store
- комментарии: бд, redux store

таблицы бд:

- пользователи - users: id / login / password / registred_at / role_id
- роли - roles: id / name
- статьи - posts : id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id /content

схема состояния на bff

- сессия текущего пользователя: login / password / role

схема для redux store

- user: id / login
- posts: массив post: id /title / imageUrl / publishedAt / comments
- post : id / title/ imageUrl / pbulishedAt / comments:массив comment: id / authr /content /publishedAt
- users: массив user: id / login / registeredAt / role
