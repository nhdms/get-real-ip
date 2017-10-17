let WebRTC = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.msRTCPeerConnection,
    handleCandidate = (candidate) => {
        //match just the IP address
        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
        return ip_regex.exec(candidate)[1];
    },
    f = new WebRTC({
        iceServers: [{
            urls: "stun:stun.l.google.com:19302?transport=udp"
        }]
    }, {
        optional: [{
            RtpDataChannels: !0
        }]
    })

f.onicecandidate = function (a) {
    if (!a.candidate) f.close()
    else console.log(handleCandidate(a.candidate.candidate))
    //a.candidate && b(a.candidate.candidate)
}

f.createDataChannel("")

f.createOffer(function (a) {
    f.setLocalDescription(a, function () {}, function () {})
}, function () {})
