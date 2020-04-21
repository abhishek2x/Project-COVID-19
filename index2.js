

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    function updateStatus() {

        fetch("https://api.covid19api.com/world/total", requestOptions)
    
            .then(response => response.json())
            .then(rsp => {
                console.log(rsp.TotalConfirmed);
                console.log(rsp.TotalRecovered);
                console.log(rsp.TotalDeaths);
                console.log("Hiiiiiiiiiiiiiiiiiiiiiiii");
    
                var tc = rsp.TotalConfirmed;
                var tr = rsp.TotalRecovered;
                var td = rsp.TotalDeaths;
    
                var s = document.getElementById('stats1');
                s.innerHTML += tc;
    
                var s = document.getElementById('stats2');
                s.innerHTML += tr;
    
                var s = document.getElementById('stats3');
                s.innerHTML += td;
                
                var b = document.getElementById('stats');

            })
            .catch(error => console.log('error', error));
    }
    
    updateStatus();
