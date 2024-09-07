 window.Module = window.Module ||  (function()
        {
            console.log('Execute immediately');//IIFE
            function internal()
            {
                console.log('internal');
            }
            return {
                api: internal
            };
        })();