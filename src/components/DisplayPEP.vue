<template>
    <div id="pep-container">
        <img :src="wiki_image" alt="">
        <h3>PEP Score</h3>
        <p>{{score}}</p>
        <div id="info-container">
            <table id="info-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Found in dataset</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{name}}</td>
                        <td>{{dataset}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
</template>

<script>
export default{
    props: {
        name: {
            type: String,
            default: "-"
        },
        score: {
            type: String,
            default: '-'
        },
        dataset: {
            type: String,
            default: '-'
        },
        wiki_image: {
            type: String,
            default: '-' 
        }
    }
}
</script>

<style scoped>
#info-container{
    width: 100%;
    display: flex;
    justify-content: center;
}
img{
    margin-top: 4%;
    margin-bottom: 2%;
    box-shadow: 0 0 20px rgba(59, 59, 59, 0.308);
    min-width: 180px;
    max-width: 200px;
    min-height: 180px;
    max-height: 200px;
    image-rendering: high-quality;
    border-radius: 50%;
}
#info-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 350px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
#info-table thead tr{
    background-color: #720000;
    color: #ffffff;
    text-align: left;
}
#info-table th, td{
    padding: 12px 15px;
    text-align: left;
}
#info-table tbody tr {
    border-bottom: thin solid #dddddd;
}

#info-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

#info-table tbody tr:last-of-type {
    border-bottom: 2px solid #980000;
}
#info-table  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>