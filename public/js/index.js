const getThoughts = () => 
    fetch('/api/thoughts', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);