 const button = document.querySelectorAll('button[data-step]'),
            sendData = document.querySelector('button[type=submit'),
            divGroup = document.querySelectorAll('.form-step'),
            dataSession = document.querySelectorAll('input'),
            selectSession = document.querySelectorAll('select'),
            labelData = document.querySelectorAll('label')


        const user = {}

        const objToFetch = data => {
            data.forEach(element => {
                if (element.value != "" & element.value != "Selecione uma opção") {
                    user[element.getAttribute("name")] = element.value
                }
            });
        }

        const fetchData = () => {
            objToFetch(dataSession)
            objToFetch(selectSession)
        }

        const dataStep = data => data.dataset.step

        const parentDiv = data => {
            const parentDiv = data.parentNode.parentNode.parentNode.parentNode
            parentDiv.classList.add('d-none')
        }

        const dataTitle = data => {
            return data.parentNode.parentNode.parentNode
        }

        const getDivGroup = step => divGroup.forEach(divEl => {
            const arrClass = divEl.classList
            if (arrClass.contains(step)) {
                divEl.classList.remove('d-none')
            }
        })

        const gotToSession = (d, event) => {
            event.preventDefault()
            parentDiv(d)
            const step = dataStep(d)
            getDivGroup(step)
            fetchData()
        }

        sendData.addEventListener('click', e => {
            e.preventDefault()
            fetchData()
        })
