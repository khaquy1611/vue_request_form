<template>
        <table class="table">
            <tr>
             <th>Fullname</th>
             <th>City</th>
             <th>Wish Salary</th>
             <th>Created at</th>
             <th>Statuss</th>
            </tr>
            <tbody>
                <tr>
                    <td>Trịnh Nguyễn</td>
                    <td>Hà Nội</td>
                    <td>16.000.000</td>
                    <td>2022/10/04</td>
                    <td>Pending</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name: 'ListUser',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.table > tr > th {
    padding: 0 20px;
    font-size: 20px;
    font-weight: 600;
   
}
.table > tr {
    border: 2px solid #E4E7EB;
}
.table {
width: 100%;
height: 672px;
margin-top: 40px;
margin-left: 20px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;

}
</style>