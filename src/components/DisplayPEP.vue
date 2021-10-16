<template>
    <div id="info-container">
        <table id="info-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Dataset</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{name}}</td>
                    <td>{{score}}</td>
                    <td>{{dataset}}</td>
                </tr>
            </tbody>
        </table>
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
#info-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
#info-table thead tr{
    background-color: #7c0000;
    color: #ffffff;
    text-align: left;
}
#info-table th, td{
    padding: 12px 15px;
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