var iframe = document.querySelector('#player iframe');
var player = new Vimeo.Player(iframe);
var transcript = document.getElementById('transcript');
var follow_toggle = document.getElementById('follow-toggle');

var paragraphs = transcript.querySelectorAll('.transcript-paragraph');
var ptimes = [];
Array.prototype.forEach.apply(paragraphs,[function(p) {
    var link = p.querySelector('a.player-jump-to');
    var t = parseFloat(p.getAttribute('data-start'));
    ptimes.push({p:p, t:t});
    link.addEventListener('click',function(e) {
        e.preventDefault();
        e.stopPropagation();
        player.setCurrentTime(t);
        player.play();
    });
}]);

var active_p = null;

player.on('timeupdate',function(tobj) {
    var t = tobj.seconds;
    var current = null;
    for(var i=1;i<ptimes.length;i++) {
        if(ptimes[i].t > t) {
            current = i-1;
            break;
        }
    }
    ptimes.forEach(function(pt,i) {
        var is_active = i==current;
        pt.p.classList.toggle('active',is_active);
        if(is_active && i!=active_p) {
            active_p = i;
            var should_follow = follow_toggle.checked;
            if(should_follow) {
                pt.p.scrollIntoView({block:'nearest'});
            }
        }
    });
});

var links = transcript.querySelectorAll('.transcript-paragraph a');
for(let a of links) {
}
