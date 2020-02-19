//revealing module patterns

let myModule = (function(){
    let _data = [];
    
    let _render = () => {
        console.log("this is test")
    }

    let _add = () => {
        _data.push("abcd");
        console.log(_data);
    }

    let _remove = () => {
        _data.pop(0,1)
    }

    return {
        render: _render,
        add: _add
    }

})()

myModule.render()
myModule.add()