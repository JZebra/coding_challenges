'''
Given a restaraunt menu with Items and Combos
An Item has name and price
A combo is a list of items and its own price

Items: [a:2,b:2,c:1,d:3,e:1,f:5]

Combos: [{
    'items': [a,b],
    'price': 4
    }, {
    'items': [c,d,e],
    'price': 8
    }]

Two assumptions
1. Item can only belong to one combo, given the list above [a,c] would be invalid
2. Combos will always be cheaper than the individual items summed

Goal is to find price given an order of items.

Input: List[Item]
Output: Int
'''

def get_limiting_qty(item_qty_map, combo):
    # initialize limiting_qty
    limiting_qty = item_qty_map.get(combo['items'][0])
    # how many combos can we buy
    for item in combo['items']:
        if item not in item_qty_map:
            return 0
        else:
            order_qty = item_qty_map[item]
            if order_qty < limiting_qty:
                limiting_qty = order_qty

    return limiting_qty



def get_price(item_list):
    total_price = 0

    # create item qty map
    item_qty_map = {}
    for item in item_list:
        if item not in item_qty_map:
            item_qty_map[item] = 1
        else:
            item_qty_map[item] += 1

    # find valid combos
    for combo in combo_menu:
        order_qty = get_limiting_qty(item_qty_map, combo)

        # add price to total and deduct items from map
        if order_qty > 0:
            print('adding {0} to total price'.format(order_qty * combo['price']))
            total_price += order_qty * combo['price']
            print('total price ', total_price)
            for item in combo['items']:
                item_qty_map[item] -= order_qty

    # add remaining items
    for item, qty in item_qty_map.items():
        price = item_menu[item]
        total_price += qty * price

    return total_price



item_menu = {'a': 2,'b':2,'c':1,'d':3,'e':1,'f':5}

combo_menu = [{
        'items': ['a','b'],
        'price': 4
    }, {
        'items': ['c','d','e'],
        'price': 8
    }]

print(get_price(["a","b","e"]))   # 5
print(get_price(["c","a","d","e"]))  # 10
print(get_price(["c","a","d","e","a","b","e"]))  # 15
print(get_price(["f"]))  # 5
