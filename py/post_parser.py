import json
from services import get_posts


def count_posts():
    """Returns a dict mapping userIds to number of posts"""
    response = get_posts()
    print(response.json())
    res_json = json.loads(response.json())
    post_dict = {}
    for post in res_json:
        user_id = post["userId"]
        if user_id in post_dict:
            post_dict[user_id] = post_dict[user_id] + 1
        else:
            post_dict[user_id] = 1

    return post_dict
