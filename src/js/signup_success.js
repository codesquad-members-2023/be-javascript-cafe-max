
window.onload = function(){
	const params = new URLSearchParams(location.search);
    const userIdNode = document.createTextNode(params.get("user_id"));
    const userEmailNode = document.createTextNode(params.get("user_email"));
    document.getElementById("userId").appendChild(userIdNode);
    document.getElementById("userEmail").appendChild(userEmailNode);
};