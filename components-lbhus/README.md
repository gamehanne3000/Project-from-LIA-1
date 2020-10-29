## How to use

* `docker-compose up`

### Create component

`docker-compose exec storybook create-component "component name"`

### Use existing component

Add the package to package.json, for example:

```
{
  "dependencies": {
    "@bit/understandit_thomas.testar.css.test-component": "0.0.13"
  }
}
```
<!-- parent-props = påverkar allt inom detta block  -->
<!-- child-props = påverkar varje {{ element }} som finns innanför parent blocket -->
<!-- example-props =  vad vill jag visa -->
<!-- 
  
  // parent-prop:
  <div class="class-1"> -> fokuserar på denna class
		{{ contents }}
	</div>

  // child-prop:
	<div class="class-2">
     {{ bg }} -> lägger till parent "class-2" till alla komponenter som har denna interpolering
	</div>

 -->