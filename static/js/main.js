document.getElementById('exampleModal1').addEventListener('shown.bs.modal',  event => {
  // do something...
  const target_id = $(event.relatedTarget).closest(".music_card")[0].getAttribute('id').split("_")[1];
  const grade = document.getElementById("music_"+target_id).querySelector(".grade").innerText;
  const artist = document.getElementById(target_id).querySelector(".artist").innerText;
  const title = document.getElementById(target_id).querySelector(".title").innerText;

//   console.log($(this));
  document.getElementById('exampleModal1').querySelector(".modal-body .music").innerHTML = `<p>${target_id}번째 음악 / ${artist}의 ${title} | 점수 ${grade}</p>`
  console.log(document.getElementById('exampleModal1').querySelector(".modal-body .music"));
  document.getElementById("exampleModal1").querySelector(".btn.btn-primary").setAttribute("data-target",target_id);
})

document.getElementById('exampleModal2').addEventListener('shown.bs.modal',  event => {
    // do something...
    // const target_id = $(event.relatedTarget).getAttribute('data-target');
    //
    console.log($(event.relatedTarget).attr("data-target"));
  })



document.getElementById('exampleModal1').addEventListener('hidden.bs.modal',  event => {
    document.getElementById("exampleModal1").querySelector(".btn.btn-primary").setAttribute("data-target","");
    alert("닫음")
})