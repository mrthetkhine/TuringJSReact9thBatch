window.MyModule = window.MyModule || (function()
{
    console.log('Module init');
    function internalMethod()
    {
        console.log('Internal method api');
    }
    return {
        api : internalMethod
    }
})();