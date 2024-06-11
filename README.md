# jQuery Snowfall Plugin Documentation 

## Introduction 
The jQuery Snowfall Plugin adds snowflakes to your website with customizable options for intensity, direction, and size.

## Usage 
Include jQuery and the jquery.snowfall.js file in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snowfall Plugin</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="path/to/jquery.snowfall.js"></script>
    <style>
        .snowflake {
            position: absolute;
            color: #fff;
            z-index: 1000;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div id="snowfall-container" style="position:relative; height:100vh; background:#000;"></div>
    <script>
        $(document).ready(function () {
            $('#snowfall-container').snowfall({
                intensity: 200,
                direction: 'down',
                size: 10
            });
        });
    </script>
</body>
</html>
```

##Options
* intensity (number): Sets the number of snowflakes on the screen. Default is 100.
* direction (string): Sets the direction of the snowfall. Options are 'down', 'left', 'right', and 'up'. Default is 'down'.
* size (number): Sets the size of the snowflakes in pixels. Default is 5.

```javascript
$('#snowfall-container').snowfall({
    intensity: 150,
    direction: 'right',
    size: 8
});
```

The code snippet will create 150 snowflakes falling to the right with a size of 8 pixels each.


## Summary 
The jQuery Snowfall Plugin is a simple yet customizable library to add a snowfall effect to your website. By adjusting the intensity, direction, and size options, you can create a unique snowfall experience tailored to your needs.
