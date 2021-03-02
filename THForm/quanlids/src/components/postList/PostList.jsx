import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
};
function PostList(props) {
    const {posts} = props;
    return (
        <div>
             <table>
                <tr>
                  
                  <th>Tên SV</th> 
                  <th>mã sv</th>
                  <th>Hành động</th>
                </tr> 
                {posts.map(post => (
                <tr>
                    
                    
                    <td key={post.id}>{post.title}</td>
                    <td key={post.id}>{post.updatedAt}</td>
                    {/* <td><button onClick={() => handleClick(todo)}>Xóa</button> </td>*/}
                    
                    
                </tr>
                ))}
            </table> 
           
        </div>
    );
}

export default PostList;