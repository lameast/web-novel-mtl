'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Novel from './novel';

export default function NovelCard({novel}: {novel: Novel}){
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary">
                    {novel.translated_title}
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {novel.meta_info.description}
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {novel.meta_info.lee_s_description}
                </Typography>
            </CardContent>
        </Card>
    )
}