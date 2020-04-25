class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="janecook-nav fixed-top">
            <div>
                <svg width="135" height="30" viewBox="0 0 135 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="135" height="30" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(-0.00673401) scale(0.003367 0.0151515)"/>
                </pattern>
                <image id="image0" width="301" height="66" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAABCCAYAAAACNoDVAAAACXBIWXMAAAsSAAALEgHS3X78AAAMdElEQVR4nO2dMW/byBLHN4fXO+IXSKAAhAABfH6we7uQ65cmaaNr4vLc2d3z6+wuV1rNOa3d+OoIiNPHuESAAEPA6eW+wCr5BH4Y3dBYyyR3drm7JMX5AUEMW+KIFPfPmdnZ2Sd3d3eCaRcyiZ8KIc6FEMv/o8nsvI4XQCbxNf54HU1mxxV/HKYm/IO/iFZyJYTYwRO/rvEFSD/jjkzib3UVVyYsP/H1bhcyid8pYgDsNuQCvJNJvFmDz8FUDItWi5BJDAL1S0PPeANDWqblsGi1BCWP1QhyvKp/oqfItBgWrfYAiexnDTrbpzm//4XDxHbDotUCGh4WZsFhYovh2cN24D2kQmFMgZm+bx7NQZh4EE1mHCq2EPa01hwY3DDIfZylTOLnMonPZRJDsd9H5d//oERBJvHQ49U9xjwd0zJYtNYYHNS6oswdmyuAgvRFCPEm5yWQP/sNCkQ9ictGCA+SqR9OwkPZ73WEEG+FEAP81VwIcRpNb+f8nVfKAQ5up2Ao+BvxmDtYwOojef5GJvGx51CUqRmlPS0UrA9CiBMUrQEK2GfZ723xF14N6N0cuDaOx70yfBvkoEyX4VC9M17e0zJchIcgVlniBGJ20fYLXCFevCwhxNDyuAeGYSLVMwNv67nF52EaigvRelXwty57W+Hx5WUhLy3ft+FxyRB7Wy0iRMnDou0XuQJ8eVnCNnGPbFqElhQ4txUImcSHGkuX0WTmNZftQrRGQoi8E7nhZHwl+PKy6swxhq6MX040R7/BiThvuAgPT/GDrgIe1j7fQGHBUgRfXhbwo47nDWEr1221g9KiFU1vF9H0dhsF6lIIMRZCHAkhXkTT2ywxY/zi28sq03/LZ++uDfa02oGznFY0vR1hqMhUBC4kNq5+h7qraDKjCgrkpP5tcYY/DGzYcsAFp+tP7dYeyn6vC7OOyq8gL+Y9mS/7vfvCWJd5OJw97fg4dgbec1nQPdRyaVCIGb5nhgLMNJDSoiX7PV2T+b1oejsueL9aTT/Iec0Cw87xcnaiQMR0nyea3j5RXvsWbT8oy0B7EOoemQomim56Po/KPWS/J5RzGbkSZMzn2JYjmDLEUI+aO3sfcHHzsOYtpJmSVOppyX7vEGceO5qXdrAeDP6dyH4PlgidlrCbFr5miiTaA+F5Jfu9/Wh6e0k85mHBTKpKKtCHZc9F4aXnBPw90WT2BZfyXBF6dIFghcw1LRPy0WT23cXBZBKrnv8imsyc52lD2AhpxzeViZbs9y40hal5dFC4YNC/tvRUPuRU8a+yFDfZ7+m8RTjWGfGYKum5dG28uhVCeVlLULg2MSQdZojX75BfKhGq2RaibuC1sOq5hQM7fUA+9pSTWOCU/iXWJBkPfAMbf3vjluISyg7hc2zhmCtyThbLqIzwGSoRLdnvnVgKlsoAheK1oe1DC3E5k/3edpaoKGsvdd5iEW/xb2VKRGyS46VAb+ZYaRMDIvYdBC30Z1nBeHG2TGITT7mbvlYmMQz4fUpBpYWNZfrCxEZIOwacEcbHPlU0g7emQQ+JcjEpQPhmKn5vCa9ZpVvwvouSgnX/uVBQjXFQn1R6eQ0IGHhVDgWrzDkZiZbiCdhc/8GyOcDfx/BtQ3uvh7JDRSZx3tpkldNoMtOmYFKq6KeluyBzrPM6IpZQmF7gLuE1JDuYyM/Li6XM8TzyinBVDtFzM6Vs25c6FmV6aVy4Cnol1HRBHstj5AmXQxsXMolz77dQdqig+OnEcxxNZkcmx60iPCwSGRjgD8Iw2e/NNUsHbC/uCO2lSX6dmGXdCLov5Gg1yY7eVN75pBMALhLzJtRqowgHG1eYvN+Vp9zBMGjbo43lsWQSv4gms6z8Zyg7WlBAzzSvW5imd0RFolU0ILNqsnTeic2XtK1W68MMHuUJBQn39H2YfC8SunHWrCD8TimLyGJQgWjtuJxxc0DZcJU0iyqTmOIpm7AFx4wms/sIwcDGDQ5i3Ws7+NB7kP8MZccAioDu2YhicNEymd5HYdAt0DRltLq8CIQShUvX/0v9EnRfeu5sI/6tSLSqYFijavJQC74peZ8jnFlbYPinmyUerKQ1KDZepzkdnPH7oHkgQtL8dCVhHsqOFuwEobuPj2xnKyuviEevI/VaOsoN4Wvw5l2oIpHJQhdOnuAsqTGqRxeQWiyBwQXf3vdnRAHSfYcwsO4fsjDIZBJDOPNnwXvu0x8GNu6T0CAQMon3UVCKeJV65KHsEKE4GiP1uppS2cYWkMSW/d5nvAEu8EQPiyrjHZH51LCokbJN6FNwlZcw4ZlFS2SnEDfioPCJ8BrKPfZoRgu9jsKZLsznUG08mmyKJrMxIS2ienuh7FCgtK4xSryvEtzTIlSjM+a4KjOAlshXFdZZhdwFW/fQuSkIi8aaB0sXByfFRt7DcqwRjG7Ozz7tlGWB9Villq5VER6yYDkGEuhY3VwWSGCf46LjoEl5DAtd7YJNEV3dYMwdWJhop5TjWNsgdPxVhSaUnbI4WToUVLSIdU0Cn1JpB8QFYeq0CnRf9qhEB0eb930q2Qo5BeqjrkMKF5Y4uMyncdvletKFJH2ZfJaowNPSCdZodQ2e0jKmbtzoas4cLYSm8sWRaImQwiWTOF0n6HKxN3d5qC+w9KlUH/k6iRYM8ia1Z9a5ubn1VjhjWiR4lxZ9t64dhlcChQsWRQ999afCxP9/HB/2BzEnp7u+uTkrrBYvCpvSQWltgzAZM8/52acdF6RFp3u2xwotWkUXKO/i2KwV9A50fcC+W3nnNIBwGDu63qNMRBTd9DYdYH0ICyTFP8okfg9JeoftXnbRu/KRdKdeB91ghELRTk7S+JXmvky/vzI2KMvDsn72accVA1jiY7LeUKWykocMBpjzWgKDW/Z7Zw66QfhEF/5Bd4gPsHQHSzxgOvizRrDGNi1qUFB+93SubyBPJJP4vMwSG/DaZBKDqHz0OEtI3aKMkhB+JExYzlB4TyriYGtji5AAV+sKQ9mhQF2ac6aUhhgR2tO60VykM1ybt3A8a+GLEaGJoWndWZk82LnHFjUbKF6wx+Bf6NFcp0lvNYTEHZ/TXZ93cS3gboAmhRAakvpoQY2STOK5ZubtBGZl08QxVpHrlqeoBZwUG8v2NumsGnHNXiV2iCyLWGUSH2lqttL2OcY1W6FF65IgRlkXvigMqwxc/rPvcPv/UVGzQR3RZHaFguK71ulZKmDpLxyVXJTFtPHfiFAMeYLLUubEB+nq96ez0cF2MOn7tgj3+jgjkR3Kjo709ZQHeiqkRvd86PBwZLHj9CXR/a0EbMXsYgJh5Ggiwqpj55pgWjZBLUvpEAVrri6WNrSReuSUh3OWdxLKDgkMkSnvN17qFlS0MFezZyBcN03Y8BWT7XuWScsFlnm4Os93Nd5Q1SfvTbfFx4H12uJBmsej79CHjawCzVB2TEAB13lRW4St9h8QPBGPC4FfaLyuOQ7kzBbHdQTCumh6+0LZtFbHXNnU1lk9l9ICuU38sD1nHJj7Dgb7fl6Y49AG5ItyZ5ZD2TGEcm8fYr6QxJO7O90OYMU42EJsNbZerMvO1FgY21F3QEGx8r6Xo0ziL6G6f9aA/0aTWSmhxpm0E4slZvMiwXJo44haIuDTjkxi/XhfuRYyic8IpUuQ2yLVbpUSLRScz5qXFYoW4wcsTfijBZf3azSZOeu8qjTT05Xa3GCLFWOPxNQGFqsaP+R82LEUrS7qBGVzC+31NBYtrKVKe2BRZiC218VzahqeKs7rBISFu766UmDle7anXLJTQYGNdL2tMxsh7YTARrSKepyvAqFeVPNrsNZAq5kqthcLxM/UuixmffCdiLcq02ecAi1fvq7hJf2VBaud+BQtap0G4xGcTYRq9L/W6DpDeUOoPvJMzfAlWnNMwDcqVl5XULherolwgWANa/A5mIpwLVpp7REn32sGJqs3Gx4qsmAxVon4rF5CN9gPy0cbC8YhuHmEz4XVvuCkO7OkdHEp00waVA4BIe3LCjfbYGpGnfppMQHBCvJ/1Txc/BVCWhYsRoU9LSb1ug4C9Lui8hU7pXKvd+YRLFrMEsx1HVQsXhAKHnPuiimCRYt5AIrXEMUr1Map0Cb6HJoY8rfB6GDRYnLBRddDLE513THiE/ZzvzLtg8W0GxYthgT2fd9U+r0/N/DEQKC+496M15yrYsrAosU4Ab2yp3isb+w9Mb5g0WIYplFwnRbDMI2CRYthmEbBosUwTKNg0WIYplGwaDEM0xyEEP8HaLJeTXDPztsAAAAASUVORK5CYII="/>
                </defs>
                </svg>            
            </div>
            <div>
                <ul>
                    <li><a class="link" href="./index.html">Home</a></li>
                    <li>
                        <a class=""  href="menu.html" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Menu<span><svg style="margin-left:10px"width="11" height="14" viewBox="0 0 11 14" fill="" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.08331 10.431L0.311491 5.11692C0.0813503 4.86063 0.0813503 4.44511 0.311491 4.18884L0.868047 3.56904C1.09779 3.31319 1.47015 3.3127 1.70044 3.56795L5.5 7.77946L9.29955 3.56795C9.52983 3.3127 9.90219 3.31319 10.1319 3.56904L10.6885 4.18884C10.9186 4.44514 10.9186 4.86065 10.6885 5.11692L5.9167 10.431C5.68656 10.6873 5.31345 10.6873 5.08331 10.431Z" fill="#292929"/>
                            </svg></span>
                            
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
<<<<<<< HEAD
                            <a class="dropdown-item" href="">Menu Spesial</a>
                            <a class="dropdown-item" href="">Menu Biasa</a>
=======
                            <a class="dropdown-item" href="./menu.html">Menu</a>
                            <a class="dropdown-item" href="./menu-spesial.html">Menu Spesial</a>
                            <a class="dropdown-item" href="./menu-biasa.html">Menu Biasa</a>
>>>>>>> b4e269b025ca7178a7f3dbdc2204fb147e0251c9
                        </div>
                    </li>
                    <li><a href="./promo.html" class="link">Promo</a></li>
                    <li><a href="./tentang-kami.html" class="link">Tentang Kami</a></li>
                    <li><a href="./lokasi.html" class="link">Lokasi</a></li>
                </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define("app-bar", AppBar);
