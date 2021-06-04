<!DOCTYPE html>
<html>
<head>

</head>
<body>
<header>
    <nav>
        <div>
            <!--Home-->
            <a href="">Home</a>

            <!--Downloadcenter-->
            <a href="">Downloadcenter</a>

            <!--Methodenübersicht-->
            <div class="dropdown">
                <button>Methodenübersicht</button>
                <div class="dorpdown-content">
                    <div class="dropdown">
                        <button>Kategorie A</button>
                        <div class="dropdown-content">
                            <div>Methode1</div>
                            <div>Methode2</div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button>Kategorie B</button>
                        <div class="dropdown-content">
                            <div>Methode1</div>
                            <div>Methode2</div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button>Kategorie C</button>
                        <div class="dropdown-content">
                            <div>Methode1</div>
                            <div>Methode2</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Solverübersicht-->
            <div class="dorpdown">
                <button>Solverübersicht</button>
                <div class="dropdown-content">
                    <div>Solver1</div>
                    <div>solver2</div>
                </div>
            </div>
        </div>
    </nav>
</header>

{{slot}}

<footer>
    <div>
        <a href="">Impressum</a>
    </div>
</footer>
</body>
</html>