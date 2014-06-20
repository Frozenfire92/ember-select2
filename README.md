Ember Select2
==========

This is a fork of [ember-select-2](https://github.com/iStefo/ember-select-2) with minimal changes. The purpose is to provide easier installation into your project, with the end goal being collaboration between the two authors.

#### Authors:
- [Stefan Fochler](https://github.com/iStefo)
- [Joel Kuntz](https://github.com/Frozenfire92)

## Usage

1) Install via Bower

```bash
bower install --save ember-select2
```

2) Add library references to your index.html

```html
<link rel="stylesheet" href="bower_components/select2/select2.css">
<link rel="stylesheet" href="bower_components/select2/select2-bootstrap.css"><!-- optional -->

<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/select2/select2.js"></script>
<script src="bower_components/ember-select2/build/lib.js"></script>
```
**note your version of jquery may differ** 

3) Use in your project

```handlebars
{{select-2 content=pizzas value=testResult placeholder="Select one"}}
```

See `[index_controller.js](https://github.com/Frozenfire92/ember-select2/blob/master/app/scripts/controllers/index_controller.js)` and `[index.hbs](https://github.com/Frozenfire92/ember-select2/blob/master/app/templates/index.hbs)` for exapmles in this repository. 

See [Here](https://istefo.github.io/ember-select-2/#/examples) for more detailed examples.



## Developing

After cloning repository, install library dependencies.

```bash
npm install
bower install
```

Then build with `grunt`.

```bash
grunt serve
```
