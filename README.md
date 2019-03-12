# Eat-Da-Burger

Notes:

I added eslint with basic rules and a gitignore file. Remember these when you setting up your repo.

Finding...

There first problem was on your routes. The index rout is `/` and not `/index`.

Also your you where not passing your callback all the way to your orm, so the data result was not been passed back to your controller.

I fix your index route, now you go and fix other ones. Remember to pass the callback from your controller to your model and all the way to your orm.

`controller->model->orm`

I also left notes on your code. Hope this helps!
