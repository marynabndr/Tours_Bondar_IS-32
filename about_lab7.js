
    // підсвічування 
    document.getElementById('feature-list').onclick = function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('highlighted');
        }
    };


    document.getElementById('action-menu').onclick = function(event) {
        const action = event.target.dataset.action;
        if (!action) return;

        switch (action) {
            case 'bookTour':
                alert("Забронювати можна зв'язавшись з менеджерами");
                break;
            case 'getInfo':
                alert("Більше інформації на головній сторінці");
                break;
            case 'highlightList':
                document.querySelectorAll('#feature-list li').forEach(li => {
                    li.classList.add('highlighted');
                });
                break;
        }
    };

