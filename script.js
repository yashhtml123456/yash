

 let x = document.getElementById("a");
    x.addEventListener(
        "click",
        () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {



                    let lat = position.coords.latitude;
                    let lng = position.coords.longitude;
                    let s = position.coords.accuracy;
                    let k = position.coords.speed;
                    let y = position.coords.heading;
                    let n = document.getElementById("t");
                    n.innerHTML = `lat: ${lat} <br> long:${lng}  <br> acuuracy:${s} <br> speed:${k} <br> direction:${y}`;

                    async function getAddress(l, n) {

                        let response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${l}&lon=${n}`
                        );

                        let data = await response.json();
                        let c = document.getElementById("det");
                        c.innerHTML = `<br> ${data.display_name} <br>`;

                        // console.log(data);


                    }
                    getAddress(lat, lng);

                },

                () => {
                    let n = document.getElementById("t");
                    n.innerText = "please allow location or check internet conection";
                }

            );
            // navigator.geolocation.watchPosition(res, rej);
        }

    );
