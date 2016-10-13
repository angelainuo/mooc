<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Plyr - A simple HTML5 media player</title>
        <meta name="description" content="A simple HTML5 media player with custom controls and WebVTT captions.">
        <meta name="author" content="Sam Potts">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Styles -->
        <link rel="stylesheet" href="../dist/plyr.css">

        <!-- Docs styles -->
        <link rel="stylesheet" href="../dist/demo.css">
    </head>
    <body>
        <main role="main" id="main">
            <nav class="btn__bar">
                <ul>
                    <li class="active">
                        <button type="button" class="btn" data-source="video">Video</button>
                    </li>
                    <li>
                        <button type="button" class="btn" data-source="audio">Audio</button>
                    </li>
                    <li>
                        <button type="button" class="btn btn--youtube" data-source="youtube"><svg class="icon"><use xlink:href="#icon-youtube"/></svg>YouTube</button>
                    </li>
                    <li>
                        <button type="button" class="btn btn--vimeo" data-source="vimeo"><svg class="icon"><use xlink:href="#icon-vimeo"/></svg>Vimeo</button>
                    </li>
                </ul>
            </nav>
            <section>
                <video poster="https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.jpg" controls crossorigin>
                    <!-- Video files -->
                    <source src="http://200036875.vod.myqcloud.com/200036875_11986524907711e69d4111a40c0f774d.f0.mp4" type="video/mp4">
                    <source src="https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.webm" type="video/webm">

                    <!-- Text track file -->
                    <track kind="captions" label="English" srclang="en" src="https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default>

                    <!-- Fallback for browsers that don't support the <video> element -->
                    <a href="https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.mp4" download>Download</a>
                </video>

                <ul>
                    <li class="plyr__cite plyr__cite--video"><small><a href="http://viewfromabluemoon.com/" target="_blank">View From A Blue Moon</a> &copy; Brainfarm</small></li>
                    <li class="plyr__cite plyr__cite--audio"><small><a href="http://www.kishibashi.com/" target="_blank">Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;</a> &copy; Kishi Bashi</small></li>
                    <li class="plyr__cite plyr__cite--youtube"><small><a href="https://www.youtube.com/watch?v=bTqVqk7FSmY" target="_blank">View From A Blue Moon</a> on <span class="color--youtube"><svg class="icon"><use xlink:href="#icon-youtube"/></svg>YouTube</span></small>
                    <li class="plyr__cite plyr__cite--vimeo"><small><a href="https://vimeo.com/ondemand/viewfromabluemoon4k" target="_blank">View From A Blue Moon</a> on <span class="color--vimeo"><svg class="icon"><use xlink:href="#icon-vimeo"/></svg>Vimeo</span></small>
                </ul>
            </section>
        </main>

        <!-- Plyr core script -->
        <script src="../dist/plyr.js"></script>

        <!-- Docs script -->
        <script src="../dist/demo.js"></script>

        <!-- Rangetouch to fix <input type="range"> on touch devices (see https://rangetouch.com) -->
        <script src="https://cdn.rangetouch.com/0.0.9/rangetouch.js" async></script>

        <!-- Sharing libary (https://shr.one) -->
        <script src="https://cdn.shr.one/0.1.9/shr.js"></script>
        <script>if(window.shr) { window.shr.setup({ count: { classname: 'btn__count' } }); }</script>
    </body>
</html>
}
