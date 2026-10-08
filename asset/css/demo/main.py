# def print():
#     print('Hello')
#     print('Welcome PNV')
# print()

# def print_demo(a):
#     return a
# #
# print(print_demo("Hello")) 

def chu_vi_hcn(chieu_dai,chieu_rong):
    ket_qua = (chieu_dai +chieu_rong)*2
    return ket_qua

a = float(input("Nhập chiều dài: "))
b = float(input("Nhập chiều rộng: "))
print(f"Chu vi hình chữ nhật là: {chu_vi_hcn(a, b):.2f} cm")

