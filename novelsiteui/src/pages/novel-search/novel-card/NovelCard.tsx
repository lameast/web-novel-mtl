'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Novel from '../../../model/novel';
import { Link } from 'react-router-dom';

export default function NovelCard({novel}: {novel: Novel}){
    return (
        <Card component={Link} to={'../novel/'}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary">
                    {novel.translated_title}
                </Typography>
            </CardContent>
        </Card>
    )
}