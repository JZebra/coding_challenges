import json
import requests
from post_parser import count_posts
from services import get_posts, POST_URL
from unittest import TestCase
from unittest.mock import Mock, patch


class PostParserTest(TestCase):

    def test_get_response(self):
        response = requests.get(POST_URL)
        self.assertTrue(response.ok)

    @patch('post_parser.get_posts')
    def test_count_posts(self, mock_get_posts):
        mock_posts = [
            {'title': '', 'userId': 1, 'body': 'hey'},
            {'title': '', 'userId': 1, 'body': 'hello'},
            {'title': '', 'userId': 2, 'body': 'bonjour'}
        ]
        mock_get_posts.return_value = Mock(ok=True)
        mock_get_posts.return_value.json.return_value = json.dumps(mock_posts)

        post_count = count_posts()
        self.assertTrue(post_count[1], 2)
        self.assertTrue(post_count[2], 1)
