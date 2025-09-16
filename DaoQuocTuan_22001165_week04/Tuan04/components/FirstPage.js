import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function FirstPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={[styles.row, { alignItems: 'flex-start' }]}>
          <Image source={require('../assets/book.png')} style={styles.thumb} />
          <View style={styles.info}>
            <Text style={[styles.title, styles.bold]}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={[styles.supplier]}>Cung cấp bởi Tiki Trading</Text>

            <View style={[styles.row, { alignItems: 'baseline', marginTop: 4 }]}>
              <Text style={[styles.priceNew, styles.bold]}>141.800 ₫</Text>
              <Text style={styles.priceOld}>141.800 ₫</Text>
            </View>

            <View style={[styles.row, { alignItems: 'center', marginTop: 8 }]}>
              <TouchableOpacity style={styles.incDecBtn} disabled>
                <Text style={styles.incDecText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>1</Text>
              <TouchableOpacity style={styles.incDecBtn}>
                <Text style={styles.incDecText}>+</Text>
              </TouchableOpacity>

              <View style={{ flex: 1 }} />
              <TouchableOpacity>
                <Text style={styles.link}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.row, styles.savedCouponRow]}>
          <Text style={[styles.bold]}>Mã giảm giá đã lưu</Text>
          <View style={{ flex: 1 }} />
          <TouchableOpacity>
            <Text style={[styles.link, styles.bold]}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.row, { gap: 8 }]}>
          <TextInput
            style={styles.input}
            placeholder="Mã giảm giá"
            placeholderTextColor="#9aa0a6"
          />
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={[styles.applyText, styles.bold]}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row]}>
          <Text style={[styles.bold]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <View style={{ flex: 1 }} />
          <TouchableOpacity>
            <Text style={[styles.link, styles.bold]}>Nhập tại đây?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row]}>
          <Text style={styles.label}>Tạm tính</Text>
          <View style={{ flex: 1 }} />
          <Text style={[styles.priceNew, styles.bold]}>141.800 ₫</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row, { marginBottom: 8 }]}>
          <Text style={[styles.bold]}>Thành tiền</Text>
          <View style={{ flex: 1 }} />
          <Text style={[styles.priceNew, styles.bold]}>141.800 ₫</Text>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={[styles.submitText, styles.bold]}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6', 
    padding: 12,
  },

  row: { flexDirection: 'row' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    marginBottom: 30,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },

  thumb: { width: 64, height: 64, borderRadius: 2, resizeMode: 'cover' },

  info: { flex: 1, marginLeft: 10 },

  title: { fontSize: 14, lineHeight: 18, color: '#111827' },
  supplier: { marginTop: 2, color: '#6b7280' },

  priceNew: { color: '#e11d48', fontSize: 16 },
  priceOld: {
    marginLeft: 8,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
    fontSize: 12,
  },

  incDecBtn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incDecText: { fontSize: 18, color: '#111827' },
  qtyText: { marginHorizontal: 10, fontSize: 16 },

  link: { color: '#2563eb' },

  savedCouponRow: { marginTop: 12, marginBottom: 8, alignItems: 'center' },

  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },

  applyBtn: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#0860b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: { color: '#fff' },

  label: { color: '#374151' },

  submitBtn: {
    height: 48,
    borderRadius: 6,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  submitText: { color: '#fff', letterSpacing: 0.5 },

  bold: { fontWeight: '700' },
});
