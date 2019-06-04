import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

const namespace = 'cards';

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects[`${namespace}/queryList`],
  };
}

class List extends React.Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];

  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/queryList`,
    });
  }

  render() {
    const { cardsList, cardsLoading } = this.props;
  
    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);