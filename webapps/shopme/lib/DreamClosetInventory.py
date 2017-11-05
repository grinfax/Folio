import weakref

class item(object):
    inventory = []
    def __init__(self, name, price, size, itemType):
        self.__class__.inventory.append(weakref.proxy(self))
        self.name = name
        self.price = price
        self.size = size
        self.itemType = itemType

jean1 = item("Stevie Jeans - Light", 35, True, "jean")
jean2 = item("Fade Away Jeans - Black", 20, True, "jean")
jean3 = item("Asphalt Jeans -  Dark Blue", 40, True, "jean")
jean4 = item("Seek And Destroy Jeans - Light Stone", 40, True, "jean")

top1 = item("Hendrix Crop Top - Black", 23, True, "top")
top2 = item("Yes Please Off Shoulder Crop Top - Burgundy", 23, True, "top")
top3 = item("Born To Ride Tee - Orange", 18, True, "top")
top4 = item("Ring My Tee - White", 23, True, "top")
top5 = item("La Bella Top - White", 25, True, "top")
top6 = item("90's Time Machine Top - Denim", 25, True, "top")
top7 = item("Feminism Tie Dye - Multi", 20, True, "top")
top8 = item("Justine Top - Black", 22, True, "top")


print("")
print("                RECIEPT                 ")
print("----------------------------------------")  

count = 0
subtotal = 0
for inventory in item.inventory:
    print(inventory.itemType , inventory.name , inventory.price)
    subtotal += inventory.price
    count += 1

print("----------------------------------------")   
tax = subtotal * .07
total = subtotal + tax
print("Item Total : %d" %count)
print("Subtotal : $%d.00" %subtotal)
print("Tax : $%d.00" %tax)
print("Total : $%d.00" %total)





