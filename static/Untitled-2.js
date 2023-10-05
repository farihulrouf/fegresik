fetch('http://localhost:8000/api/datapakets/getstatic?tahun=2023')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data["products"]);
    for (i = 0; i < data["products"].length; i++) {
        // console.log(data["products"][i]["id"]);
        temp = document.createElement('div');
        temp.className = 'results';
        temp.innerHTML = '<div class="card">'+
       ' <div class="card-body">'+
          '<div class="row">'+
            '<div class="col mt-0">'+
               '<h5 class="card-title">'+Barang+'</h5>'+
             '</div>'+
             '<div class="col-auto">'+
                '<div class="stat text-primary">'+
                    '<i class="align-middle" data-feather="truck"></i>'+
                 '</div>'+
             '</div>'+
           '</div>'+
          '<h1 class="mt-1 mb-3">'+2.382+'</h1>'+
          '<div class="mb-0">'+
             '<span class="text-danger">'+
                 '<i class="mdi mdi-arrow-bottom-right">'+
                 '</i>'+
              '</span>'+
              '<span class="text-muted">'+Total+'</span>'+
           '</div>'+
         '</div>'+
     ' </div>';
        document.getElementsByClassName('col-sm-6')[0].appendChild(temp);
      }
  });


