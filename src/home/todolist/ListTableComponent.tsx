import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataTypeListTable {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataTypeListTable>['columns'] = [
    {
        title: 'Task',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Time',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Level',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Update</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataTypeListTable[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'Normal',
        tags: ['love'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'Normal',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Normal',
        tags: ['cool'],
    },
];

const ListTableComponent: React.FC = () => <Table<DataTypeListTable> columns={columns} dataSource={data} />;

export default ListTableComponent;