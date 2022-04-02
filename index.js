list = document.getElementById('list');

myRank = 4;
data = [[1, "CHEE1234", 500], [2, "CHEE1234", 500], [3, "CHEE1234", 500], [ 4, "CHEE1234", 500], [5, "CHEE1234", 500], [6, "CHEE1234", 500], [7, "CHEE1234", 500], [8, "CHEE1234", 500], [9, "CHEE1234", 500], [10, "CHEE1234", 500]]

function createList(data) {

    list.innerHTML = ``;


    data.forEach(element => {
        
    
        container = document.createElement('div')
        container.setAttribute('class', 'container');
        
        
            width15 = document.createElement('span')
            width15.style.width = '15%';
        
            width152 = document.createElement('span')
            width152.style.width = '15%';
        
            width153 = document.createElement('span')
            width153.style.width = '15%';
    
            srno = document.createElement('div')
            srno.setAttribute('class', 'srno');
    
                srnoTxt = document.createTextNode(element[0])
                srno.appendChild(srnoTxt)
    
            avatar = document.createElement('div')
            avatar.setAttribute('class', 'avatar');
    
                imgAvatar = document.createElement('img')
                imgAvatar.setAttribute('src', 'avatar.png');
    
            span = document.createElement('span')
            span.setAttribute('class', 'fill_parent')
    
            span2 = document.createElement('span')
            span2.setAttribute('class', 'fill_parent')
    
            cheename1 = document.createElement('div')
            cheename1.setAttribute('class', 'name');
    
                if (myRank !== element[0]) {
                cheename1Txt = document.createTextNode(element[1])
                }
                else{
                cheename1Txt = document.createTextNode('You')
                cheename1.style.fontWeight = 'bolder'
                container.style.backgroundColor = '#F4F2F7'
                }
                cheename1.appendChild(cheename1Txt)
                
    
            points = document.createElement('div')
            points.setAttribute('class', 'points');
    
                imgIco = document.createElement('img')
                imgIco.setAttribute('src', 'givwys.png');
    
                point = document.createElement('span')
                point.setAttribute('class', 'point');
    
                    pointTxt = document.createTextNode(element[2])
                    point.appendChild(pointTxt)
    
    
            // Appending children
    
            container.appendChild(width15)
            container.appendChild(srno)
            container.appendChild(width152)
            container.appendChild(avatar)
                avatar.appendChild(imgAvatar)
            container.appendChild(span)
            container.appendChild(cheename1)
            container.appendChild(span2)
            container.appendChild(points)
                points.appendChild(imgIco)
                points.appendChild(point)
            container.appendChild(width153)
    
            list.appendChild(container)


    });


}

createList(data)
