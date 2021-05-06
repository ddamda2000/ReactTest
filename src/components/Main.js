import React from 'react';
import Customer from './Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    root : {
        width : '100%'
    ,   marginTop : theme.spacing.unit * 3
    ,   overflowX : 'auto'
    }
    ,
    table : {
        minWidth : 1000
    }
})

const customer = [
    {
        'id' : 'rosedamask'
    ,   'image' : 'https://placeimg.com/64/64/any'
    ,   'name' : '김판수'
    ,   'age' : '27'
    ,   'job' : '백수'
    ,   'point' : '그냥병신'
    }
    ,
    {
        'id' : 'rlatjddyd23'
    ,   'image' : 'https://placeimg.com/64/64/2'
    ,   'name' : '김성용'
    ,   'age' : '27'
    ,   'job' : '회사원'
    ,   'point' : '인격장애'
    }
    ,
    {
        'id' : 'lys9765'
    ,   'image' : 'https://placeimg.com/64/64/3'
    ,   'name' : '이용섭'
    ,   'age' : '27'
    ,   'job' : '취준생'
    ,   'point' : '코딩노예'
    }
    ,
    {
        'id' : 'dudqja'
    ,   'image' : 'https://placeimg.com/64/64/4'
    ,   'name' : '김영범'
    ,   'age' : '27'
    ,   'job' : '공시생'
    ,   'point' : '붕어빵못만드는새끼'
    }
]

class Main extends React.Component {
    render() {
        const { classes } = this.props;
    
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>아이디</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>나이</TableCell>
                            <TableCell>직업</TableCell>
                            <TableCell>특징</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            customer.map(c => {
                                return (
                                    <Customer
                                        key={c.id}
                                        id={c.id}
                                        image={c.image}
                                        name={c.name}
                                        age={c.age}
                                        job={c.job}
                                        point={c.point}
                                    />
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(style)(Main);