const express = require('express');
const app = express();
const port = 3000;
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Moaz",
        email: "moaz@example.com",
        age: 27,
    });
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello asudhsfh asdjkfh asdjk fhaeuir fhaseuik hfkasj hfaksjeh faskej fhasejk fhalsejk fhasejkl fhishf",
        user: "6784173131f25d31ce1b5ade",
    });

    let user = await userModel.findOne({_id: "6784173131f25d31ce1b5ade"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});