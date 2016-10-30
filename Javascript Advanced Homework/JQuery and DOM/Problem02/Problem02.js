/**
 * Created by TKlas on 22.10.2016 г..
 */

function increment(selector) {

    var container = $(selector),
        textAreaCreate = '<textarea class="counter"  disabled>0</textarea>',
        incrementButtonCreate = '<button class="btn" id="incrementBtn">Increment</button>',
        addButtonCreate = '<button class="btn" id="addBtn">Add</button>',
        resultList = '<ul class="results">',
        body = $('body'),
        sum = 0;

    container.append(textAreaCreate, incrementButtonCreate, addButtonCreate, resultList);

    body.on('click', '#incrementBtn', function () {
        var counter = $('.counter');
        sum = parseFloat(counter.val());
        sum ++ ;

        counter.val(sum);
    });

    body.on('click', '#addBtn', function () {
        var resultToAppend = $('.results');

        resultToAppend.append('<li>' + sum + '</li>')
    })

}